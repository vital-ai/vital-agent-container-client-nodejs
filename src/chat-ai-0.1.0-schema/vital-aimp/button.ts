import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Button
 */
export class Button extends VITAL_Node {
  public url?: string;
  public buttonType?: string;
  public selected?: boolean;
  public id?: string;
  public payload?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Button';
  }

  /**
   * Get property definitions for Button
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasUrl',
        tsPropertyName: 'url',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasButtonType',
        tsPropertyName: 'buttonType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSelected',
        tsPropertyName: 'selected',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasId',
        tsPropertyName: 'id',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPayload',
        tsPropertyName: 'payload',
        type: 'string',
        required: false
      }
    ];
  }


}
