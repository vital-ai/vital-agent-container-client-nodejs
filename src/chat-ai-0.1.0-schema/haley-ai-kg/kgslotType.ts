import { KGType } from './kgtype';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGSlotType
 */
export class KGSlotType extends KGType {
  public kGSlotTypeLabel?: string;
  public kGSlotTypeExternIdentifier?: string;
  public kGSlotTypeName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGSlotType';
  }

  /**
   * Get property definitions for KGSlotType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSlotTypeLabel',
        tsPropertyName: 'kGSlotTypeLabel',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSlotTypeExternIdentifier',
        tsPropertyName: 'kGSlotTypeExternIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSlotTypeName',
        tsPropertyName: 'kGSlotTypeName',
        type: 'string',
        required: false
      }
    ];
  }


}
