
class Check

	def Check.evaluate_a1(a1)
		if(a1 == "6")
			return "Correct"
		else 
			return "Incorrect"
		end
	end
		
	def Check.evaluate_a2(a2)
		if(a2 == "1776")
			return "Correct"
		else 
			return "Incorrect"
		end
	end

	def Check.evaluate_a3(a3)
		if(a3 == "Madrid")
			return "Correct"
		else 
			return "Incorrect"
		end
	end

	def Check.results_hash(r1, r2, r3)
		results = Hash.new
		results["r1"] = r1
		results["r2"] = r2
		results["r3"] = r3

		return results
	end

end