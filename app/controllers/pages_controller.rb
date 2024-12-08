class PagesController < ApplicationController
  skip_before_action :authenticate_user!

  def home
  end

  def media
  end

  def contact
  end

  def calendar
  end

  def splash
  end

  def biography
  end
end
