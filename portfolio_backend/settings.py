# portfolio_backend/settings.py

INSTALLED_APPS = [
    ...,
    'rest_framework',
    'corsheaders',
    'api',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    ...,
]

# السماح بالطلبات من الفرونت اند
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",  # URL لفرونت React
]

# إعداد timezone و static/media
STATIC_URL = '/static/'
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'
