from azure.storage.blob import BlockBlobService
from azure.storage.blob import ContentSettings
block_blob_service = BlockBlobService(account_name='jenablopstore', account_key='Yh9XVP01V17bI5E2vh6Nzus+PeI0N+kxryUgg//8BAX4EJ1yk0DZ/9YZJvRcCKip8m9f7wE9HI19YEdRlTMLNQ==')
block_blob_service.create_blob_from_path(
   'image',
   'photo.jpg',
   'photo.jpg',
   content_settings=ContentSettings(content_type='image/jpeg'))