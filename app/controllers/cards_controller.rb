class CardsController < ApplicationController

    skip_before_action :verify_authenticity_token

    def index
        @cards = Card.all
        render json: @cards
    end

    # TODO: show, new, edit for Admin page

    def create
        puts ">>>> CREATE: #{params}"

        @card = Card.new(card_params)

        if @card.save
            updated_cards
        else
            render json: { error: "Create error" }
        end
    end

    def update
        puts ">>>> UPDATE: #{params}"

        @card = Card.find(params[:id])

        if @card.update(card_params)
            updated_cards
        else
            render json: { error: "Update error" }
        end
    end

    def destroy
        puts ">>>> DESTROY: #{params}"

        @card = Card.find(params[:id])
        @card.destroy
    end

    private

        def card_params
            params.require(:card).permit(:question, :answer)
        end

        def updated_cards
            @cards = Card.all
            render json: @cards
        end
        

end
