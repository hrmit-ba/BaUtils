class TroopsController < ApplicationController
  def index
    @all_troops = []

    Troop.kinds.each do |kind|
      Troop.tiers.each do |tier|
        @all_troops << Troop.new(kind, tier).get_details
      end
    end

    @all_troops
  end
end
