MyApp.get "/" do

	erb :"home"

end

MyApp.get "/server" do
	@answer = params[:string]
	Check.evaluate_a1(@answer)
	

end