MyApp.get "/" do

	erb :"home"

end

MyApp.get "/server" do
	@answer = params[:string]
	@result1 = Check.evaluate_a1(@answer)
	puts Check.make_results_array(@result1)

	erb :"home"
end