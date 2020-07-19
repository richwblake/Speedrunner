class AddGameIdToSplits < ActiveRecord::Migration[6.0]
  def change
    add_column :splits, :game_id, :integer
  end
end
