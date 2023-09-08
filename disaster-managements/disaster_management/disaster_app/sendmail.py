from django.conf import settings
from django.core.mail import send_mail
from .models import DisasterEntry
import json
def send_email(dis_id,email):
    disentry = DisasterEntry.objects.get(id=dis_id)
    teamlist = eval(disentry.send_to)
    emaillist = []
#     for i in teamlist:
#         print(i)
#         if i == 'rescue_team':
#             emaillist.append('akki0918@gmail.com')
#         if i == 'police_team':
#              emaillist.append('akshaytidake0918@gmail.com')
#         if i == 'revenue_team':
#              emaillist.append('atidke@infimatrix.com')
#         if i == 'CEO':
#              emaillist.append('pdixit@infimatrix.com')
#         if i == 'DHO':
#              emaillist.append('pranavdixit20@gmail.com')
    subject = 'Disaster Alert!!'
   
    message = f' disaster {disentry.disaster_type} has happened at {disentry.taluka} Taluka in {disentry.village} village,{disentry.wadi}.Please rush with your team for evacuating the affected area'
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [email]
    send_mail( subject, message, email_from, recipient_list )
    