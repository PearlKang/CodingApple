print(1111)
print(123+123)

print("차은우"*10)

print("슈퍼 에이전트 하이퍼 초필살 드래곤")
print("슈퍼 에이전트 하이퍼 초필살 드래곤")
print("슈퍼 에이전트 하이퍼 초필살 드래곤")
print("슈퍼 에이전트 하이퍼 초필살 드래곤")

# >
print()
# >

name="슈퍼 에이전트 하이퍼 초필살 드래곤"

print(name)
print(name[0])  # indexing 인덱싱
print(name[0:2])

# array, 배열
중고차1="K5 white 5000"
print(중고차1)

중고차2=["K5","white",5000]
print(중고차2)
print(중고차2[0])
print(중고차2[1])

중고차2[1]="black"
print(중고차2[1])

# 중고차2.sort()
# 중고차2.reverse()
# 중고차2.pop()

중고차3=["K5","white",[5000,6000]]
print(중고차3)

# dictionary, object
중고차4={"brand":"BMW","model":"520D"}
중고차4={
    "brand":"BMW",
    "model":"520D"
}
print(중고차4)
print(중고차4["brand"])

중고차4["brand"]=1234
print(중고차4["brand"])

# if 조건식 :
#     조건식이 참일때 실행할 코드 (indent(tab) 필요함)

재고량=10

if 재고량>0:
    print("지금주문가능합니다.")

중고차재고=["K5","BMW","Tico"]

if "K5" in 중고차재고:
    print("지금주문가능합니다.")
# elif
else:
    print("주문불가능함 ㅅㄱ")