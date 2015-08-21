class Square
  attr_accessor :color
  attr_reader :row, :column

  def initialize row, column
    @row = row
    @column = column
    if starting_white then @color = 'white' end
    if starting_black then @color = 'black' end
  end

  def place_piece color
    @color = color
  end

  def change_color
    if @color == 'black'
      @color = 'white'
    else
      @color = 'black'
    end
  end

  private
    def starting_white?
      (@row == 4 && @column == 4) || (@row == 5 && @column == 5)
    end

    def starting_black?
      (@row == 4 && @column == 5) || (@row == 5 && @column == 4)
    end
end