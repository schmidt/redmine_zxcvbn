require "redmine_zxcvbn/hooks"

Redmine::Plugin.register :redmine_zxcvbn do
  name "Redmine zxcvbn plugin"
  author "Gregor Schmidt"
  description "This plugin adds a password quality meter based on Dropbox's " +
              "zxcvbn library to Redmine's password fields to improve the " +
              "user's password choices."
  version "1.0.0"
  url "https://github.com/schmidt/redmine_zxcvbn"
  author_url "https://www.nach-vorne.eu/"
end
