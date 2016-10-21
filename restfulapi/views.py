from django.shortcuts import render
from rest_framework.views import APIView
from usermanager.models import MailBox, Mail
# Create your views here.


class MailBox(APIView):
    def get(self):

        lb_list = Mail.objects.all()
