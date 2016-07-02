# -*- coding: utf-8 -*-
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect



def main(request):
    return JsonResponse({"message":"Hello, I'm ruirui"})