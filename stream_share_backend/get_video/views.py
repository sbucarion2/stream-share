from dotenv import load_dotenv
import os

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Videos
from .serializer import VideosSerializer

load_dotenv()

def update_path(file_path):

    file_path = file_path.split("media")[-1]

    file_path = os.getenv("MOVIE_STORAGE_URL")+ file_path

    return file_path


@api_view(["POST"])
def add_video(request):

    serializer = VideosSerializer(data=request.data)
    if serializer.is_valid():

        thumbnail_server_path = update_path(serializer.validated_data["thumbnail_location"])
        video_server_path = update_path(serializer.validated_data["video_location"])

        serializer.validated_data['thumbnail_location'] = thumbnail_server_path
        serializer.validated_data['video_location'] = video_server_path

        serializer.validated_data['test_record'] = False

        print(serializer.validated_data)

        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
def get_all_videos(request):

    videos = Videos.objects.exclude(test_record=True).order_by("name")
    serializer = VideosSerializer(videos, many=True)

    return Response(
        serializer.data
    )


@api_view(["GET"])
def play_video(request, id):

    print("REQUEST RECIEVED")

    video = Videos.objects.filter(id=id)

    serializer = VideosSerializer(video, many=True)

    return Response(
        serializer.data[0]
    )
