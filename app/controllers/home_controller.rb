MyApp.get "/" do

	erb :"home"

end

MyApp.get "/server" do
	@answers = params[:string]
	@ans_array = @answers.split(",")
	
	@r1 = Check.evaluate_a1(@ans_array[0])
	@r2 = Check.evaluate_a2(@ans_array[1])
	@r3 = Check.evaluate_a3(@ans_array[2])

	return Check.results_hash(@r1, @r2, @r3)

end