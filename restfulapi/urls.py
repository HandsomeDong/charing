from django.conf.urls import url
from restfulapi.views import *

urlpatterns = [
    url(r'^api/', admin.site.urls),
]