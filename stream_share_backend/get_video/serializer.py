from rest_framework import serializers
from .models import Videos


# Boilerplate Serializer to convert all fields to json
class VideosSerializer(serializers.ModelSerializer):

    class Meta:

        model = Videos
        fields = '__all__'