
import io
import os

from PIL import Image
from stability_sdk import client
import stability_sdk.interfaces.gooseai.generation.generation_pb2 as generation

Key = 'Token'
stability_api = client.StabilityInference(
    key=Key, 
    verbose=True,
)

class Generate:
    def __init__(self, promt) -> None:
        self.promt = promt

    def gn(self):
        answers = stability_api.generate(
            prompt=self.promt,
            seed=876542, # if provided, specifying a random seed makes results deterministic
            steps=50, # defaults to 50 if not specified
            cfg_scale=10,
            )
        for resp in answers:
            for artifact in resp.artifacts:
                if artifact.finish_reason == generation.FILTER:
                    print("Please modify the prompt and try again.")
                if artifact.type == generation.ARTIFACT_IMAGE:
                    img = Image.open(io.BytesIO(artifact.binary))
                    img.save('output.png')  ## using PIL ; Image.open(this)
                    return 'sussesful save!'