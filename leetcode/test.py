# def testing(arr):
#     count = 0
#     for i in arr:
#         if(i > 10):
#            count += 1
    
#     print("number of element greater than 10 are:" , count)
#     print("number of element smallar than 10 are:" , len(arr)-count)
            


# testing([1,2,3,33,22])

# def sort(arr):
#     arr.sort(reverse = True)
#     print(arr)

# sort([1,3,2])

# print(range(5))

# for number in range(1, 6 , 1):
#     print(number)
# print("lets see go for counting using for ")


# def counter(arr):
#     count = 0
#     for num in arr:
#         count += 1

#     print("count of for loop" , count)
    
#     countwhile = 0 
#     i = 0
#     while i<len(arr):
#         countwhile += 1
#         i += 1
#     print("count of whileloop" , countwhile)

# counter([1,2,3,4,5,6,7,8,9,10])


    
# # sum of array using python with loop

# def sum(arr):
#     sum = 0
#     for i in arr:
#         sum += i
#     print(sum)
# sum([1,2,3,4,5])

# find max number without using built in funciton 

# def max(arr):
#     max = 0
#     for i in arr:
#         if(i > max):
#             max = i
#     print(max)
# max([1,2,3,4,5])

# counting vowels 

# def countvowels(s):
#     vowels = ['a', 'e' , 'i' , 'o' , 'u']
#     counter = 0
#     for i in s:
#        if i in vowels:
#         counter += 1

#     print(counter)
# countvowels("hello worlds")
 

#  # largest of two number 

# def max(a , b):
#     max = a
#     if( max < b):
#         max = b
#     print(max)
# max(10,20)

# # finding even and odd in an array 

# def find(arr):
#     result = []
#     for i in arr:
#         if( i % 2 == 0):
#             result.append("even")
#         else:
#             result.append("odd")
#     print(result)
# find([1,2,3,4,5])

# using -->  hash map in python

# def frequency(arr):
#     map = {}
    
#     for i in arr:
#         map[i] = map.get(i , 0) + 1
    
#     print(map)

# frequency([1,2,1," ",1,2," ",1]) 