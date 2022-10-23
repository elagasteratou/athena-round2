from rest_framework import serializers

from .models import Home


class IntegrationProtectResponseSerializerR1(serializers.ModelSerializer):
    answer = serializers.CharField(source="protect_question_answer_txt", read_only=True)

    class Meta:
        model = Home
        fields = (
            "address",
            "EPC_current",
            "EPC_image",
            "EPC_potential",
            "CO2_emissions_current",
            "energy_efficiency_current",
            "cost_current_lighting",
            "cost_potential_lighting",
            "cost_current_heating",
            "cost_potential_hot_water",
            "cost_potential_windows",
            "next_steps_score_delta",
            "score",
            "score_delta",
            "next_steps_completed",
            "completed",
            "status",
        )

    def validate(self, attrs):
        attrs = super().validate(attrs)
        house = attrs["rows"]
        protect_question_answer = attrs["protect_question_answer"]

    def to_internal_value(self, data):
        ret = super().to_internal_value(data)
        ret["valid_until"] = ret["protect"].get_protect_response_valid_until()
        return ret

    def update(self, instance, validated_data):
        raise NotImplementedError

    def create(self, validated_data):
        # the scores will be calculated by a signal (protect_response_signal_post_save)
        instance = super().create(validated_data)

        invalidate_previous_protect_response(new_protect_response=instance)
        create_behaviour_event_from_protect_response(protect_response=instance)

        if instance.protect.security_behaviour_id is not None:
            task_behaviour_iq_etl.delay(obj_type="ProtectResponse", obj_id=instance.id)

        return instance
