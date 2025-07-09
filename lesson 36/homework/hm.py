# def digitize(n):
#     num = []
#     for i in str(n):
#         num.append(int(i))
#     return(num[::-1])


# def make_upper_case(s):
#        return s.upper() 


# def get_count(sentence):
#     count = 0
#     sum = "aeiouAEIOU"
#     for i in sentence:
#         if i in sum:
#             count +=1
#     return count


# def disemvowel(string_):
#     lowels = "aeiouAEIOU"
#     str = ""
#     for i in string_:
#         if i not in lowels:
#             str += i
#     return str

# def square_digits(num):
#     final = ""
#     for i in str(num):
#         final += str(int(i)**2) 
#     return int(final)


# def sum_array(a):
#     sum = 0
#     for i in a:
#         sum += i
#     return sum


# def lovefunc( flower1, flower2 ):
#     if flower1 %2 ==0 and flower2 %2 !=0:
#         return True
#     elif flower2 %2 ==0 and flower1 %2 != 0:
#         return True
#     else: return False


# def find_needle(haystack):
#     index= -1
#     for i in haystack:
#         index +=1
#         if i == "needle":
#             return f"found the needle at position {index}"

# def invert(lst):
#     arr = []
#     for i in lst:
#         arr.append(-i)
#     return arr

# def smash(words):
#     return ' '.join(words)    



# def abbrev_name(name):
#     lastname = ""
#     string = name.split()
#     for i in string:
#         lastname += i[0] + "."
#     print(lastname.upper()[:-1])
# abbrev_name("luka merumovi")    