
#1614. Maximum Nesting Depth of the Parentheses
# def max_depth(s)
    stack = []
    max = 0
    
    s.each_char do |char|
        if char == "("
            stack << char
        elsif char == ")"
            stack.pop
        end
        
        stack_length = stack.length
        
        if stack_length > max
            max = stack_length
        end
    end
    
    return max
end



