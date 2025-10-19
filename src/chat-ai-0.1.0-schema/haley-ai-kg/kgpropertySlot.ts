import { KGSlot } from './kgslot';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGPropertySlot
 */
export class KGPropertySlot extends KGSlot {
  public kGPropertyNameSlotValue?: string;
  public propertySlotTypeSlotValue?: string;
  public kGPropertyGroupNameSlotValue?: string;
  public propertyFrameTypeSlotValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGPropertySlot';
  }

  /**
   * Get property definitions for KGPropertySlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGPropertyNameSlotValue',
        tsPropertyName: 'kGPropertyNameSlotValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasPropertySlotTypeSlotValue',
        tsPropertyName: 'propertySlotTypeSlotValue',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGPropertyGroupNameSlotValue',
        tsPropertyName: 'kGPropertyGroupNameSlotValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasPropertyFrameTypeSlotValue',
        tsPropertyName: 'propertyFrameTypeSlotValue',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
