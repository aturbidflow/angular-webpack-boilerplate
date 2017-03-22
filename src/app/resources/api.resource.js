'use strict'

export default function ( $resource, apiBaseUrl )
{
    return {
        endPoint1: $resource(apiBaseUrl + 'some/path/to/:id', {},
            {
                get: 
                    {
                        method: 'GET',
                        isArray: false,
                        params: 
                            {
                                id: '@id'
                            }
                    },
                update: 
                    {
                        method: 'POST',
                        params: 
                            {
                                id: '@id',
                                action: 'update'
                            }
                    }
            }),
        endPoint2: $resource(apiBaseUrl + 'another/path/to/:guid', {},
            {
                get: 
                    {
                        method: 'GET',
                        isArray: true,
                        params: 
                            {
                                guid: '@id'
                            }
                    }
            })
    }
}