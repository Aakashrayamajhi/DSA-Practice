
def Isvalid(arr , n , m , mid):

    student = 1
    pages = 0

    for i in range(len(arr)):
        
        if arr[i] > mid:
            return False
        
        if pages + arr[i] <= mid:
            pages += arr[i]
        
        else:
            student += 1
            pages = arr[i]
        
    return student <= m


def search(arr, n , m):

    if m > n : return -1

    ans = -1
    start = 0 
    end = 0

    for i in  range(len(arr)):
        end += arr[i]

    while start <= end:

        mid = (start + end) // 2

        if Isvalid(arr , n , m , mid):
            ans = mid
            end = mid - 1
        
        else:
            start = mid + 1
    
    return ans

    

print(search([1,2,3,4], 4 , 2))