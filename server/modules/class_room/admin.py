from django.contrib import admin, auth
from django.core.mail import send_mail

import class_room.models as m
from .forms import UserForm


admin.site.unregister(auth.models.Group)
admin.site.unregister(auth.models.User)


class UserInline(admin.TabularInline):
    fields = (('first_name', 'last_name'), 'username', 'date_of_birth',
              'image', 'role', 'learning_group')

    model = m.User
    form = UserForm


@admin.register(m.LearningGroup)
class LearningGroupAdmin(admin.ModelAdmin):
    inlines = [UserInline, ]


@admin.register(m.User)
class UserAdmin(admin.ModelAdmin):
    list_filter = ('role', 'learning_group')

    fields = (('first_name', 'last_name'), 'username', 'email', 'date_of_birth',
              'image', 'role', 'learning_group')
    form = UserForm

    def save_model(self, request, obj, form, change):
        """Overriding this method allows doing pre- or post-save operations """

        if obj.role in ('admin', 'teacher'):
            obj.is_superuser = True
            obj.is_staff = True

            # if not change and obj.email:
            #     send_mail(
            #         'Your',
            #         'Here is the message.',
            #         'from@example.com',
            #         ['to@example.com'],
            #         fail_silently=False,
            #     )

        super().save_model(request, obj, form, change)
