class Troop
  attr_accessor :tiers, :kinds

  def initialize(kind, tier)
    @kind = kind
    @tier = tier
  end

  def get_details
    {
      kind: @kind,
      tier: @tier,
      data: TroopData.new(@kind, @tier).get_data
    }
  end

  def self.tiers
    [:t1, :t2, :t3, :t4, :t5]
  end

  def self.kinds
    [:warriors, :riders, :shamans]
  end
end

