import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Dialog
 */
export class Dialog extends VITAL_Node {
  public globalDialog?: boolean;
  public dialogMode?: string;
  public debugEnabled?: boolean;
  public autoLoadUserProfile?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Dialog';
  }

  /**
   * Get property definitions for Dialog
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isGlobalDialog',
        tsPropertyName: 'globalDialog',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDialogMode',
        tsPropertyName: 'dialogMode',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isDebugEnabled',
        tsPropertyName: 'debugEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isAutoLoadUserProfile',
        tsPropertyName: 'autoLoadUserProfile',
        type: 'boolean',
        required: false
      }
    ];
  }


}
