class LessonsController < ApplicationController
    
    # http_basic_authenticate_with name: 'lenny1', password: 'abcd12345', except: [:index, :show]

    # suggested order: index, show, new, edit, create, update, destroy

    def index
        @lessons = Lesson.all
    end

    def show
        @lesson = Lesson.find(params[:id])
    end

    def new
        @lesson = Lesson.new
    end

    def edit
        @lesson = Lesson.find(params[:id])
    end

    def create
        # inspect params
        # render plain: params[:lesson].inspect

        # NOT SECURE
        # @lesson = Lesson.new(params[:lesson])

        @lesson = Lesson.new(lesson_params)

        # @lesson.save returns `false` if validation fails
        if @lesson.save
            # redirect is another request
            redirect_to @lesson
        else 
            # pass @lesson object back to new.html.erb
            # rendering is the same request as form submission
            render 'new'
        end

    end

    def update
        @lesson = Lesson.find(params[:id])

        if @lesson.update(lesson_params)
            redirect_to @lesson
        else 
            render 'edit'
        end
    end

    def destroy
        puts ">>>>> #{params}"
        @lesson = Lesson.find(params[:id])
        puts ">>>> #{@lesson}"
        @lesson.destroy

        redirect_to lessons_path
    end

    def blah
        @lesson = Lesson.first
        render json: @lesson
    end

    def route_test
        render json: {
            lessons_path: lessons_path,
            lessons_url: lessons_url,
            edit_lesson_path: edit_lesson_path(3), # /lessons/3/edit
            lesson_path: lesson_path(3) # /lessons/3
        }
    end

    private
        # make "strong params" method reusable between create, update
        def lesson_params
            params.require(:lesson).permit(:title, :text)
        end
end
