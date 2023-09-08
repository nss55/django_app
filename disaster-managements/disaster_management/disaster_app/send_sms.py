import urllib.request
import urllib.parse
from django.shortcuts import HttpResponse
from heyoo import WhatsApp
from .models import DisasterEntry
from twilio.rest import Client 
from twilio.twiml.voice_response import VoiceResponse
from twilio.rest import Client

def sendSMS(dis_id):
             #twilio code
            account_sid = 'AC471e423e472a10af312ac81ccd9f8188'
            auth_token = '1a8989d18e574b088cf4be382456325a'
            client = Client(account_sid, auth_token)
            disentry = DisasterEntry.objects.get(id=dis_id)
            teamlist = eval(disentry.send_to)
            smslist = 0
            for i in teamlist:
              print(i)
              if i == 'rescue_team':
                 smslist='+919819069990'
                 message = client.messages.create(
                                        body=f' disaster {disentry.disaster_type} has happened at {disentry.taluka} Taluka in {disentry.village} village,{disentry.wadi}.Please rush with your team for evacuating the affected area',
                                        from_='+18147523032',
                                        to=smslist 
                                    )
                 print(message.sid)
              if i == 'police_team':
                  smslist='+919922448080'
            
                  message = client.messages.create(
                                        body=f' disaster {disentry.disaster_type} has happened at {disentry.taluka} Taluka in {disentry.village} village,{disentry.wadi}.Please rush with your team for evacuating the affected area',
                                        from_='+18147523032',
                                        to=smslist 
                                    )
                 
              if i == 'revenue_team':
                  smslist='+919920371598'
            
                  message = client.messages.create(
                                        body=f' disaster {disentry.disaster_type} has happened at {disentry.taluka} Taluka in {disentry.village} village,{disentry.wadi}.Please rush with your team for evacuating the affected area',
                                        from_='+18147523032',
                                        to=smslist 
                                    )
              if i == 'CEO':
                  smslist='+919763646326'
            
                  message = client.messages.create(
                                        body=f' disaster {disentry.disaster_type} has happened at {disentry.taluka} Taluka in {disentry.village} village,{disentry.wadi}.Please rush with your team for evacuating the affected area',
                                        from_='+18147523032',
                                        to=smslist 
                                    )
                  
              if i == 'DHO':
                  smslist='++917089777774'
            
                  message = client.messages.create(
                                        body=f' disaster {disentry.disaster_type} has happened at {disentry.taluka} Taluka in {disentry.village} village,{disentry.wadi}.Please rush with your team for evacuating the affected area',
                                        from_='+18147523032',
                                        to=smslist 
                                    )
                  print(message.sid)
 
def makecall(dis_id):
    account_sid = 'AC471e423e472a10af312ac81ccd9f8188'
    auth_token = '1a8989d18e574b088cf4be382456325a'
    client = Client(account_sid, auth_token)
    disentry = DisasterEntry.objects.get(id=dis_id)
    teamlist = eval(disentry.send_to)
    smslist = 0
    for i in teamlist:
              
        if i == 'rescue_team':
            smslist='+919819069990'
            msg = f'disaster {disentry.disaster_type} has happened at {disentry.taluka} Taluka in {disentry.village} village,{disentry.wadi}.Please rush with your team for evacuating the affected area'
            call = client.calls.create(
                        twiml='<Response><Say>'+msg+' .'+msg+' .'+msg+'</Say></Response>',
                        to=smslist,
                        from_='+18147523032'
                    )

            
        if i == 'police_team':
            smslist='+919922448080'
        
            msg = f'disaster {disentry.disaster_type} has happened at {disentry.taluka} Taluka in {disentry.village} village,{disentry.wadi}.Please rush with your team for evacuating the affected area'
            call = client.calls.create(
                        twiml='<Response><Say>'+msg+' .'+msg+' .'+msg+'</Say></Response>',
                        to=smslist,
                        from_='+18147523032'
                    )
            
        if i == 'revenue_team':
            smslist='+919920371598'
        
            msg = f'disaster {disentry.disaster_type} has happened at {disentry.taluka} Taluka in {disentry.village} village,{disentry.wadi}.Please rush with your team for evacuating the affected area'
            call = client.calls.create(
                        twiml='<Response><Say>'+msg+' .'+msg+' .'+msg+'</Say></Response>',
                        to=smslist,
                        from_='+18147523032'
                    )
            
        if i == 'CEO':
            smslist='+919763646326'
        
            msg = f'disaster {disentry.disaster_type} has happened at {disentry.taluka} Taluka in {disentry.village} village,{disentry.wadi}.Please rush with your team for evacuating the affected area'
            call = client.calls.create(
                        twiml='<Response><Say>'+msg+' .'+msg+' .'+msg+'</Say></Response>',
                        to=smslist,
                        from_='+18147523032'
                    )

        if i == 'DHO':
            smslist='+917089777774'
        
            msg = f'disaster {disentry.disaster_type} has happened at {disentry.taluka} Taluka in {disentry.village} village,{disentry.wadi}.Please rush with your team for evacuating the affected area'
            call = client.calls.create(
                        twiml='<Response><Say>'+msg+' .'+msg+' .'+msg+'</Say></Response>',
                        to=smslist,
                        from_='+18147523032'
                    )

            print(call.sid)


def send_whatsapp(dis_id):
    disentry = DisasterEntry.objects.get(id=dis_id)
    teamlist = eval(disentry.send_to)
    client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

    #FOR WHATSAPP MESSAGESS SENDING MODEL
   

    try:
       
        # For sending a Text messages
        message = client.messages.create(
            from_='whatsapp:+14155238886',
            body=(f' disaster {disentry.disaster_type} has happened at {disentry.taluka} Taluka in {disentry.village} village,{disentry.wadi}.Please rush with your team for evacuating the affected area'),
            to='whatsapp:+{}'.format('+918975257063')
        )
        return "message sent."
    except Exception as e:
        print(e)
