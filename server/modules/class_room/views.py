from rest_framework import viewsets
from rest_framework.response import Response

import class_room.serializers as ser
from .models import SocialUser


class SocialUserViewSet(viewsets.ModelViewSet):
    queryset = SocialUser.objects.all()

    def get_serializer_class(self):
        return ser.CreateSocialUserSerializer if self.request.method == 'POST' \
            else ser.RetrieveSocialUserSerializer

    def list(self, request, *args, **kwargs):
        return Response(data=[])
