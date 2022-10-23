import os
# import openai
from django.db import connection
from django.http import HttpResponse
from django.views.generic import View
from rest_framework import request
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response


@api_view(["get"])
@permission_classes([AllowAny])
def GPT(request):
    pass
    # openai.api_key = os.getenv("OPENAI_API_KEY")


# @app.route("/", methods=("GET", "POST"))
# def index():
#     if request.method == "POST":
#         animal = request.form["animal"]
#         response = openai.Completion.create(
#             model="text-davinci-002",
#             prompt=generate_prompt(animal),
#             temperature=0.6,
#         )
#         return redirect(url_for("index", result=response.choices[0].text))
#
#     result = request.args.get("result")
#     return render_template("index.html", result=result)


    # def generate_prompt(animal):
    #     return """Suggest three names for an animal that is a superhero.
    # Animal: Cat
    # Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
    # Animal: Dog
    # Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
    # Animal: {}
    # Names:""".format(
    #         animal.capitalize()
    #     )