#!/bin/bash

echo "🛠️ Setting up Inka-CE project structure..."

# Create root-level files
touch app.py requirements.txt README.md

# Create core directories
mkdir -p public/css public/js/core public/js/sidebar public/js/ai public/js/ui public/third public/images
mkdir -p frontend/layout frontend/panels frontend/canvas frontend/controls
mkdir -p backend/diffusers backend/sd_webui backend/utils
mkdir -p workflows service assets

# Create CSS files
touch public/css/base.css public/css/desktop.css public/css/mobile.css public/css/themes.css

# Create JS placeholders
touch public/js/core/canvas.js public/js/core/layers.js
touch public/js/sidebar/text.js public/js/sidebar/bubble.js public/js/sidebar/tone.js public/js/sidebar/effect.js
touch public/js/ai/prompt.js public/js/ai/model.js
touch public/js/ui/ui-init.js public/js/ui/toast.js

# Create HTML templates
touch frontend/index.html
touch frontend/layout/header.html frontend/layout/sidebar.html frontend/layout/canvas.html frontend/layout/drawer.html frontend/layout/layer-panel.html
touch frontend/panels/text.html frontend/panels/bubble.html frontend/panels/tone.html frontend/panels/effect.html frontend/panels/control.html
touch frontend/controls/prompt.html frontend/controls/ai-panel.html frontend/controls/api-panel.html

# Create backend Python modules
touch backend/diffusers/generate.py backend/sd_webui/api.py backend/utils/image.py backend/utils/compression.py

# Create service worker files
touch service/service-worker.js service/worker-register.js

# Create README placeholder
echo "# Inka-CE" > README.md
echo "Modular manga editor for Hugging Face Spaces." >> README.md

echo "✅ Inka-CE structure created successfully."
