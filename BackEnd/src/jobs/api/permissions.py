from rest_framework import permissions


class AnonymousUserPermission(permissions.BasePermission):

    def has_permission(self, request, view):

        if view.action in ['list', 'retrieve']:
            return True

        return False
