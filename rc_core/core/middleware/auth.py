from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.exceptions import AuthenticationFailed

class AdminJWTMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.path.startswith('/admin/'):
            
            try:
                auth = JWTAuthentication()
                user, _ = auth.authenticate(request)
                if not user.is_staff:
                    raise AuthenticationFailed("Not authorized for admin panel.")
                request.user = user
            except Exception as e:
                raise AuthenticationFailed("Invalid token.")
        else:
    
            return self.get_response(request)
