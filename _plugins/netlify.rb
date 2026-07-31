# Expose whether this build is running on Netlify
Jekyll::Hooks.register :site, :after_init do |site|
  site.config["netlify"] = ENV["NETLIFY"] == "true"
end
