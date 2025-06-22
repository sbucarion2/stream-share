from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Videos
from .serializer import VideosSerializer


@api_view(["POST"])
def add_video(request):

    serializer = VideosSerializer(data=request.data)
    if serializer.is_valid():

        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
def get_all_videos(request):

    videos = Videos.objects.all()
    serializer = VideosSerializer(videos, many=True)

    return Response(
        serializer.data
    )
