import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Endpoint
 */
export class Endpoint extends VITAL_Node {
  public defaultEndpoint?: boolean;
  public endpointID?: string;
  public channelRandomized?: boolean;
  public tunnelingEnabled?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Endpoint';
  }

  /**
   * Get property definitions for Endpoint
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isDefaultEndpoint',
        tsPropertyName: 'defaultEndpoint',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEndpointID',
        tsPropertyName: 'endpointID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isChannelRandomized',
        tsPropertyName: 'channelRandomized',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isTunnelingEnabled',
        tsPropertyName: 'tunnelingEnabled',
        type: 'boolean',
        required: false
      }
    ];
  }


}
