
class Check


	def Check.evaluate_a1(a1)
		if(a1 == "6"){
			return "Correct"
		} else {
			return "Incorrect"
		}
	end

	def Check.make_results_array(r1)
		results = Array.new
		results.push(r1)
		return results
	end
end