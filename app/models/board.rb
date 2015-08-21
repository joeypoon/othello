class Board
  attr_reader :turn

  def initialize
    @turn = 'black'
    (1..8).each do |r|
      (1..8).each do |c|
        Square.new(r, c)
      end
    end
  end

  def change_turn
    if @turn == 'black'
      @turn = 'white'
    else
      @turn = 'black'
    end
  end
end