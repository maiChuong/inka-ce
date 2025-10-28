import gradio as gr
from diffusers import StableDiffusionPipeline

pipe = StableDiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5")

def generate_image(prompt):
    image = pipe(prompt).images[0]
    return image

with gr.Blocks() as demo:
    gr.Markdown("# ✨ Inka-CE: Manga Editor")
    prompt = gr.Textbox(label="Enter your manga prompt")
    output = gr.Image()
    generate_btn = gr.Button("Generate")
    generate_btn.click(fn=generate_image, inputs=prompt, outputs=output)

demo.launch()
