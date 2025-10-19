import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AIMPDevice
 */
export class AIMPDevice extends VITAL_Node {
  public visualDevice?: boolean;
  public audioDevice?: boolean;
  public deviceID?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AIMPDevice';
  }

  /**
   * Get property definitions for AIMPDevice
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isVisualDevice',
        tsPropertyName: 'visualDevice',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isAudioDevice',
        tsPropertyName: 'audioDevice',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDeviceID',
        tsPropertyName: 'deviceID',
        type: 'string',
        required: false
      }
    ];
  }


}
