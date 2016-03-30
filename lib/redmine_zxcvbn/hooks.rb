class RedmineZxcvbn::Hooks < Redmine::Hook::ViewListener
  render_on :view_layouts_base_body_bottom, partial: "hooks/redmine_zxcvbn/view_layouts_base_body_bottom"
end
