from rest_framework import serializers
from usermanager.models import MailBox


class MailBoxSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    # belong = serializers.Field(source='belong.id')

    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return MailBox.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Snippet` instance, given the validated data.
        """
        instance.belong = validated_data.get('belong', instance.belong)
        instance.save()
        return instance
