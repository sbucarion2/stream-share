from django.urls import path
from .views import get_all_videos, add_video, play_video

urlpatterns = [
    path('videos/', get_all_videos, name='get_all_videos'),
    path('add_video/', add_video, name='add_video'),
    path('video/<id>', play_video, name="play_video"),
]
