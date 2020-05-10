class TroopData
  attr_accessor :warriors, :riders, :shamans

  def initialize(kind, tier)
    @kind = kind
    @tier = tier
  end

  def warriors
    {
      t1: {
        details: { class_name: "warrior-t1", name: "Warrior", power: 2, time: 30 },
        resources: { wood: 100, meat: 50, mana: 0, stone: 0, ivory: 0 }
      },
      t2: {
        details: { class_name: "warrior-t2", name: "Protector", power: 8, time: 60 },
        resources: { wood: 125, meat: 75, mana: 5, stone: 100, ivory: 0 }
      },
      t3: {
        details: { class_name: "warrior-t3", name: "Warmaster", power: 24, time: 120 },
        resources: { wood: 0, meat: 150, mana: 10, stone: 150, ivory: 120 }
      },
      t4: {
        details: { class_name: "warrior-t4", name: "Berserker", power: 36, time: 180 },
        resources: { wood: 0, meat: 400, mana: 70, stone: 400, ivory: 300 }
      },
      t5: {
        details: { class_name: "warrior-t5", name: "Marauder", power: 60, time: 300 },
        resources: { wood: 0, meat: 1000, mana: 500, stone: 1000, ivory: 800 }
      }
    }
  end

  def riders
     {
      t1: {
        details: { class_name: "rider-t1", name: "Wolfrider", power: 2, time: 30 },
        resources: { wood: 50, meat: 100, mana: 0, stone: 0, ivory: 0 }
      },
      t2: {
        details: { class_name: "rider-t2", name: "Rhinorider" , power: 8, time: 60 },
        resources: { wood: 100, meat: 200, mana: 5, stone: 0, ivory: 0 }
      },
      t3: {
        details: { class_name: "rider-t3", name: "Rhinomaster", power: 24, time: 120 },
        resources: { wood: 150, meat: 150, mana: 10, stone: 0, ivory: 120 }
      },
      t4: {
        details: { class_name: "rider-t4", name: "Dragonrider", power: 36, time: 180 },
        resources: { wood: 400, meat: 400, mana: 70, stone: 0, ivory: 300 }
      },
      t5: {
        details: { class_name: "rider-t5", name: "Dragonmaster", power: 60, time: 300 },
        resources: { wood: 1000, meat: 1000, mana: 500, stone: 0, ivory: 800 }
      }
    }
  end

  def shamans
    {
      t1: {
        details: { class_name: "shaman-t1", name: "Apprentice" , power: 2, time: 30 },
        resources: { wood: 75, meat: 75, mana: 0, stone: 0, ivory: 0 }
      },
      t2: {
        details: { class_name: "shaman-t2", name: "Spellcrafter", power: 8, time: 60 },
        resources: { wood: 100, meat: 100, mana: 5, stone: 100, ivory: 0 }
      },
      t3: {
        details: { class_name: "shaman-t3", name: "Totemist", power: 24, time: 120 },
        resources: { wood: 150, meat: 150, mana: 10, stone: 150, ivory: 0 }
      },
      t4: {
        details: { class_name: "shaman-t4", name: "Oracle", power: 36, time: 180 },
        resources: { wood: 400, meat: 400, mana: 70, stone: 400, ivory: 0 }
      },
      t5: {
        details: { class_name: "shaman-t5", name: "Valkyrie", power: 60, time: 300 },
        resources: { wood: 1000, meat: 1000, mana: 500, stone: 1000, ivory: 0 }
      }
    }
  end

  def get_data
    case @kind
    when :warriors
      self.warriors[@tier]
    when :riders
      self.riders[@tier]
    when :shamans
      self.shamans[@tier]
    end
  end
end
