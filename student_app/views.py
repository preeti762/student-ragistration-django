from django.shortcuts import render
from .models import Student


def home(request):
    success = False

    if request.method == "POST":
        full_name = request.POST.get("full_name", "").strip()
        gender = request.POST.get("gender", "").strip()
        email = request.POST.get("email", "").strip()
        age = request.POST.get("age", "").strip()
        phone = request.POST.get("phone", "").strip()

        if full_name and gender and email and age and phone:
            Student.objects.create(
                full_name=full_name,
                gender=gender,
                email=email,
                age=int(age),
                phone=phone
            )

            success = True

    return render(
        request,
        'student_app/home.html',
        {"success": success}
    )