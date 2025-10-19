import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogElement
 */
export class DialogElement extends VITAL_Node {
  public stateSerialized?: string;
  public id?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DialogElement';
  }

  /**
   * Get property definitions for DialogElement
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStateSerialized',
        tsPropertyName: 'stateSerialized',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasId',
        tsPropertyName: 'id',
        type: 'string',
        required: false
      }
    ];
  }


}
