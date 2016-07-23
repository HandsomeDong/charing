from django.contrib import admin

# Register your models here.

from usermanager.models import User

admin.site.register(User)
