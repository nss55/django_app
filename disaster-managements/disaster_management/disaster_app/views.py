from django.shortcuts import render,redirect,HttpResponseRedirect
from django.contrib import messages
from . models import DisasterEntry,Village,Taluka,Wadi
from .forms import DisasterForm
from.send_sms import sendSMS,send_whatsapp,makecall
from .sendmail import send_email
# Create your views here.
def getVillage(request):
    wadi_id = request.GET.get('wadi')
    village_id = Wadi.objects.get(id=wadi_id).village_name_id
    print("village id  =",village_id)
    vlist = Village.objects.filter(id=village_id).order_by('name')  
    return render(request, 'dropdown/village_dropdown_list_options.html', {'vlist': vlist})

def load_taluka(request):
    village_id = request.GET.get('village')
    taluka_id = Village.objects.get(id=village_id).taluka_name_id
    vlist = Taluka.objects.filter(id=taluka_id).order_by('name')
    print("taluka id  =",taluka_id)
    return render(request, 'dropdown/taluka_dropdown_list_options.html', {'vlist': vlist})


def signup(request):
    
        if request.user.is_authenticated:
              return HttpResponseRedirect('home/')
        else:
              return HttpResponseRedirect('accounts/login/')
import json
def home(request):
    context = {}
    form = DisasterForm(request.POST or None)
    disasterlist = DisasterEntry.objects.all()
    context['form'] = form
    context['dlist'] = disasterlist
    if request.method == 'POST':
          email = request.POST.get('email')
          print(email)
          if form.is_valid():
                entry = form.save(commit=False)
                entry.created_by = request.user.username
                
                
                entry.save()
                send_email(entry.id,email)
                # send_whatsapp(entry.id)
                sendSMS(entry.id)
                makecall(entry.id)
                messages.success(request,'Your report has been submitted successfully')
                return redirect(home)
    
    return render(request,"home.html",context=context)


def disaster_list(request):
    context = {}
    disasterlist = DisasterEntry.objects.all()

    context['dlist'] = disasterlist
    return render(request,"list.html",context=context)